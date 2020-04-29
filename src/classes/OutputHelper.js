export default class OutputHelper {
    getSectionName(property) {
        return property.split(/(?=[A-Z])/).join(' ');
    }
    output(property, value) {
        const name = this.getSectionName(property);
        switch (property) {
            case 'SourceCode':
                return this.outputCodeBlock(property, name, value);
            case 'ContactInfo':
                return this.outputHeader(property, name, value);
            case 'AboutCurrentPosition':
                return this.outputParagraphs(property, name, value);
            case 'WorkExperience':
                return this.outputWorkExperience(property, name, value);
            case 'Skills':
                return this.outputList(property, name, value);
            default:
                return this.outputString(property, name, value);
        }
    }
    outputHeader(property, name, value) {
        let output = `
            <section id="${property}">
                <h3 class="section-title">${name}</h3>
                <div class="section-block">
                    <h6>${value.fullName}</h6>
                    <h6>${value.currentTitle}</h6>
                    <h6>${value.address}</h6>
                    <h6>${value.phoneNumber}</h6>
                    <h6>${value.eMail}</h6>
                    <h6>${value.website}</h6>
                    <h6>${value.gitHub}</h6>
                </div>
            </section>`;
        return output;
    }
    outputList(property, name, value) {
        let output = `
            <section id="${property}" class="doc-section">
                <h2 class="section-title">${name}</h2>
                <div class="section-block">
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <ul class="list">
        `;
        const halfListLength = Math.round(value.length / 2);
        for (let i = 0; i < value.length; i++) {
            if (i === halfListLength) {
                output += '</ul></div><div class="col-md-6 col-12"><ul class="list">';
            }
            output += `<li>${value[i]}</li>`;
        }
        output += '</ul></div></div></div></section>';
        return output;
    }
    outputParagraphs(property, name, value) {
        let output = `
            <section id="${property}" class="doc-section">
                <h2 class="section-title">${name}</h2>
                <div class="section-block">
        `;
        value.forEach((paragraph) => {
            output += `<p>${paragraph}</p>`;
        });
        output += '</div></section>';
        return output;
    }
    outputString(property, name, value) {
        return `
            <section id="${property}" class="doc-section">
                <h2 class="section-title">${name}</h2>
                <div class="section-block">${value}</div>
            </section>`;
    }
    outputWorkExperience(property, name, value) {
        let output = `
            <section id="${property}" class="doc-section">
                <h2 class="section-title">${name}</h2>
                <div class="section-block">`;
        value.forEach((location) => {
            output += `
                <h3 class="block-title">${location.company}</h3>
                <p>${location.duration}</p>
            `;
            location.positions.forEach((position) => {
                output += `
                    <h5>${position.title}</h5>
                    ${position.duration}
                `;
                position.description.forEach((paragraph) => {
                    output += `<p>${paragraph}</p>`;
                });
            });
        });
        output += `
                </div>
            </section>`;
        return output;
    }
    outputCodeBlock(property, name, value) {
        let output = `
            <section id="${property}">
                <div class="section-block">
        `;
        output += `
            <div class="code-block">
                <pre><code class="language-javascript" style="width: 100%;">${value}</code></pre>
            </div>`;
        output += '</div></section>';
        return output;
    }

    renderElements(html) {
		document.getElementById('lastUpdated').innerText = BUILDTIME;
		document.getElementById('mainContentSourceCode').innerHTML = this.output('SourceCode', atob(ANTHONYPETTYSOURCE));
		document.getElementById('doc-wrapper').style.backgroundColor = "#000";
		document.body.style.backgroundColor = "#000";
		let el = document.getElementById('doFlip');
		if (el.addEventListener) {
			el.addEventListener("click", this.doFlip, false);
		} else if (el.attachEvent) {
			el.attachEvent('onclick', this.doFlip);
		}
		document.getElementById('mainContentRendered').innerHTML = html;
    }
	doFlip() {
		document.getElementById('flip-container').classList.toggle('flipOver');
		document.getElementById('doc-wrapper').style.backgroundColor = "#f9f9fb";
		document.body.style.backgroundColor = "#fff";
	}
}