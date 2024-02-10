export default class TextToSpeak {
	constructor(lang) {
		this.sys = window.speechSynthesis;
		this.voice = this.getVoice(lang);
		this.sent = new window.SpeechSynthesisUtterance();
	}

	getVoice(lang) {
		const voices = this.sys.getVoices();

		for (let i of voices) {
			if (i.lang == lang) return i;
		}
	}

	changeLang(lang) {
		this.voice = this.getVoice(lang);
		sent.voice = this.voice;
	}

	changeContent(content) {
		this.sent.text = content;
	}
	speak() {
		this.sys.speak(this.sent);
	}
}
