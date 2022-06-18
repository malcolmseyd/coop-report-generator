import fs from "fs"
import proc from "child_process"
import { env } from "process"

function genPDF(templateParams) {
	const latexDir = env.LATEXDIR // end with slash
	const publicDir = env.PUBLICDIR // end with slash

	const id = Math.random().toString(36).slice(2)

	const targetFolder = publicDir + id

	// copy template into public folder
	proc.execSync(`cp -r ${latexDir} ${targetFolder}`)

	// replace files with their templated equivalent
	const r = (p) => replaceTemplate(targetFolder + p)
	r("sections/titlepage.tex")
	r("letter/uvic-engr-letter-of-transmittal.tex")
	r("sections/executive-summary.tex")
	r("sections/introduction.tex")
	r("sections/discussion.tex")
	r("sections/conclusion.tex")
	r("sections/recommendation.tex")
	r("uvic-engr-work-term-report.tex")

	return publicDir + "uvic-engr-work-term-report.pdf"
}

function buildPDF(latexPath, path) {
	// proc.execSync(`${latexDir}/build.sh `)
}

function replaceTemplate(params, path) {
	const bytes = fs.readFileSync(path)
	const contents = bytes.toString()
	const newContents = Handlebars.compile(contents)(params)
	fs.writeFileSync(newContents)
}

export { genPDF }