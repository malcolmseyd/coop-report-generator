import fs from "fs"
import proc from "child_process"
import { env } from "process"
import Handlebars from "handlebars"
import { format } from "path"

function genPDF(templateParams) {
	const latexDir = env.LATEXDIR // end with slash
	const publicDir = env.PUBLICDIR // end with slash

	const id = Math.random().toString(36).slice(2)

	const targetFolder = publicDir + "/" + id

	// copy template into public folder
	proc.execSync(`cp -r ${latexDir} ${targetFolder}`)

	// replace files with their templated equivalent
	const r = (p) => replaceTemplate(templateParams, targetFolder + "/" + p)
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

function build(path) {
	proc.execSync(`pdflatex -output-directory ${path}/letter ${path}/letter/uvic-engr-letter-of-transmittal.tex`)
	proc.execSync(`pdflatex -output-directory ${path} ${path}/uvic-engr-work-term-report.tex`)
}

function replaceTemplate(params, path) {
	const bytes = fs.readFileSync(path)
	const contents = bytes.toString()
	try {
		Handlebars.compile(contents)(params).toString()
		fs.writeFileSync(path, contents)
	} catch (e) {
		console.log("error: ", e)
	}
	const newContents = Handlebars.compile(contents)(params).toString()
	fs.writeFileSync(path, newContents)

}

export { genPDF }