from flask import Flask, request, render_template
import joblib
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder

# Initialize the Flask app
app = Flask(__name__)

# Load the trained model and fitted scaler
model = joblib.load('model_1.pkl')


# Define the home route
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Get form data

        nama = request.form.get('nama')

        input_data = {
            'transportasi': int(request.form.get('transportasi')),
            'penerima_kps': int(request.form.get('penerima_kps')),
            'penerima_pip': int(request.form.get('penerima_pip')),
            'pekerjaan_ayah': int(request.form.get('pekerjaan_ayah')),
            'gaji_ayah': request.form.get('gaji_ayah'),
            'pekerjaan_ibu': int(request.form.get('pekerjaan_ibu')),
            'gaji_ibu': request.form.get('gaji_ibu'),
            'jml_saudara': request.form.get('jml_saudara'),
            'anak_ke': request.form.get('anak_ke')
        }

        # Convert input data to DataFrame
        input_df = pd.DataFrame([input_data])

        prediction = model.predict(input_df)
        probability = model.predict_proba(input_df)

        # Prepare prediction result
        result = 'Layak' if prediction[0] == 1 else 'Tidak Layak'
        probability_layak = probability[0][1] * 100

        # Render template with the result
        return render_template('hasil.html', prediction=result, probability=probability_layak, nama=nama)

    return render_template('prediksi.html')

@app.route('/prediksi', methods=['GET', 'POST'])
def prediksi():
    return render_template('prediksi.html')

if __name__ == '__main__':
    app.run(debug=True, port=80)
