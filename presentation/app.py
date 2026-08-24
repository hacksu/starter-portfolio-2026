import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/notes')
def notes():
    return render_template('notes.html')


@app.route('/logo')
def logo():
    return send_from_directory(BASE_DIR, 'HacKSU.png')


if __name__ == '__main__':
    print("Starting web dev presentation at http://0.0.0.0:5174")
    app.run(debug=True, host='0.0.0.0', port=5174)
