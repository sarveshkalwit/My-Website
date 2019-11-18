from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/ventures')
def ventures():
	return render_template('ventures.html')

@app.route('/about')
def about():
	return render_template('about.html')

@app.route('/contact')
def contact():
	return render_template('contact.html')

@app.route('/mailing')
def mailing():
	return render_template('mailing.html')

@app.route('/quote.txt')
def quote():
	return render_template('quote.txt')

if __name__ == '__main__':
	app.run(debug=True)

