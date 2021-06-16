from flask import Flask, render_template

app = Flask(__name__, template_folder='Templates')

@app.route('/<int:usr>')
def main(usr):
    return render_template('main_user.html', user = usr)

@app.route('/<int:usr>/profile')
def profile(usr):
    return render_template('user_profile.html', user = usr)

#Pendiente
@app.route('/<int:usr>/change_password')
def change_password(usr):
    return render_template('user_profile.html', user = usr)

#Pendiente
@app.route('/<int:usr>/get_credits')
def get_credits(usr):
    return render_template('user_profile.html', user = usr)

@app.route('/<int:usr>/see_product/<int:prod>')
def prod(usr, prod):
    return render_template('product.html', user = usr, prod = prod)

@app.route('/<int:usr>/buy/<int:prod>')
def buy(usr, prod):
    return render_template('buy.html', user = usr, prod = prod)

#Pendiente
@app.route('/<int:usr>/refund/<int:prod>')
def refund(usr, prod):
    return render_template('buy.html', user = usr, prod = prod)

if __name__ == '__main__':
    app.run(debug=True)