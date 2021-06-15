from flask import Flask, render_template

app = Flask(__name__, template_folder='Templates')

@app.route('/')
def index():
    return render_template('base_template.jinja')

if __name__ == '__main__':
    app.run(debug=True)