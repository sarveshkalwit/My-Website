from flask import Flask, render_template

app = Flask(__name__)

@app.route('/home')
def index():
	return render_template('index.html')

@app.route('/mailing')
def mailing():
	return render_template('mailing.html')

@app.route('/quote.txt')
def quote():
	return render_template('quote.txt')

if __name__ == '__main__':
	app.run(debug=True)
