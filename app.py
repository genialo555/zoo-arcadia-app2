from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

animals = []

def load_animals_from_csv():
    global animals
    df = pd.read_csv('animals.csv')
    animals = df.to_dict(orient='records')

@app.route('/load_animals', methods=['GET'])
def load_animals():
    load_animals_from_csv()
    return jsonify({'status': 'Animals loaded from CSV', 'animals': animals})

@app.route('/add_animal', methods=['POST'])
def add_animal():
    animal = request.json
    animal['id'] = len(animals) + 1
    animals.append(animal)
    return jsonify({'status': 'Animal added', 'animal': animal})

@app.route('/get_animals', methods=['GET'])
def get_animals():
    return jsonify({'animals': animals})

@app.route('/update_animal/<int:animal_id>', methods=['POST'])
def update_animal(animal_id):
    data = request.json
    for animal in animals:
        if animal['id'] == animal_id:
            animal.update(data)
            return jsonify({'status': 'Animal updated', 'animal': animal})
    return jsonify({'status': 'Animal not found'}), 404

if __name__ == '__main__':
    load_animals_from_csv()
    app.run(debug=True)
