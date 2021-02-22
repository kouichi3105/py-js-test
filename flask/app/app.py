#Flaskとrender_template（HTMLを表示させるための関数）をインポート
from flask import Flask,render_template,request
from flask_cors import CORS

#Flaskオブジェクトの生成
app = Flask(__name__)
CORS(app)

#「/」へアクセスがあった場合に、"Hello World"の文字列を返す
@app.route("/")
def hello():
    return "Hello World"

@app.route("/data", methods=["POST"])
def data():
    return request.get_data()

#「/index」へアクセスがあった場合に、「index.html」を返す
@app.route("/api/sample")
def index():
    return render_template("index.html")


#おまじない
if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=5000)