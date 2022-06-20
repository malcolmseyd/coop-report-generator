import fs from "fs"
import proc from "child_process"
import { env } from "process"
import Handlebars from "handlebars"
import { TemplateInput } from "./schema"

function genPDF(templateParams: TemplateInput) {
	const latexDir = env.LATEXDIR // end with slash
	const publicDir = env.PUBLICDIR // end with slash

	const id = Math.random().toString(36).slice(2)

	const targetFolder = publicDir + "/" + id

	// copy template into public folder
	proc.execSync(`cp -r ${latexDir} ${targetFolder}`)

	// replace files with their templated equivalent
	const r = (p: string) => replaceTemplate(templateParams, targetFolder + "/" + p)
	r("sections/titlepage.tex")
	r("letter/uvic-engr-letter-of-transmittal.tex")
	r("sections/executive-summary.tex")
	r("sections/introduction.tex")
	r("sections/discussion.tex")
	r("sections/conclusion.tex")
	r("sections/recommendation.tex")
	r("uvic-engr-work-term-report.tex")

	build(targetFolder)

	return "/public/" + id + "/uvic-engr-work-term-report.pdf"
}

function build(path: string) {
	proc.execSync(`pdflatex -output-directory ${path}/letter ${path}/letter/uvic-engr-letter-of-transmittal.tex`)
	proc.execSync(`pdflatex -output-directory ${path} ${path}/uvic-engr-work-term-report.tex`)
}

function replaceTemplate(params: TemplateInput, path: string) {
	const bytes = fs.readFileSync(path)
	const contents = bytes.toString()
	const newContents = Handlebars.compile(contents)(params).toString() // god i miss haskell
	fs.writeFileSync(path, newContents)
}

export { genPDF }