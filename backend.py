from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit-case', methods=['POST'])
def submit_case():
    data = request.json
    geography = data.get('geography')
    case_type = data.get('caseType')
    industry = data.get('industry')
    difficulty = data.get('difficulty')

    # Here you can handle the data as needed, such as saving it to a database
    print("Received data:", geography, case_type, industry, difficulty)

    # Respond to the frontend
    return jsonify({"status": "success", "message": "Case received"})


if __name__ == '__main__':
    app.run(debug=True)