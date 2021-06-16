from flask import Flask, render_template

app = Flask(__name__, template_folder='Templates')

@app.route('/<int:usr>')
def index(usr):
    return render_template('main_user.html', user = usr)

@app.route('/<int:usr>/see_product/<int:prod>')
def prod(usr, prod):
    return render_template('product.html', user = usr, prod = prod)

if __name__ == '__main__':
    app.run(debug=True)