from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = '9f7c1bc96923d207cad6a7eac4a741d01e47455f6f5b5688'

from app import routes