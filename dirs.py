from flask import Flask, render_template, redirect, request

app = Flask(__name__, template_folder='Templates')

class find_juego():
    def __init__(self, titulo, dev, pub, min, max):
        self.titulo = titulo
        self. dev = dev
        self.pub = pub
        self.min = min
        self.max = max

@app.route('/')
def index():
    return redirect('/1')

@app.route('/<int:usr>', methods = ['GET', 'POST'])
def main(usr):
    if request.method == 'GET':
        return render_template('main_user.html', user = usr)
    else:
        jue = find_juego(request.form.get('title'), request.form.get('dev'), request.form.get('pub'), request.form.get('min'), request.form.get('max'))
        return render_template('main_user.html', user = usr, find = jue)

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