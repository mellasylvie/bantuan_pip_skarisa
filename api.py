from flask import Flask
from flask_cors import CORS
import ujson
import sqlite3

app = Flask(__name__)
CORS(app)

def get_jumlah_siswa():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()

    # Menyimpan hasil dalam dictionary
    data_jurusan = {}

    # Daftar jurusan dan kelas
    jurusan = ['RPL', 'TSM', 'TL']
    kelas = ['X', 'XI', 'XII']

    for j in jurusan:
        data_jurusan[j] = {}
        for k in kelas:
            # Hitung jumlah siswa laki-laki
            c.execute(f"SELECT COUNT(*) FROM data_siswa WHERE kelas='{k}' AND jk='L' AND jurusan='{j}'")
            jumlah_lk = c.fetchone()[0]

            # Hitung jumlah siswa perempuan
            c.execute(f"SELECT COUNT(*) FROM data_siswa WHERE kelas='{k}' AND jk='P' AND jurusan='{j}'")
            jumlah_pr = c.fetchone()[0]

            # Menyimpan hasil dalam dictionary
            data_jurusan[j][k] = {
                'jumlah_laki': jumlah_lk,
                'jumlah_perempuan': jumlah_pr
            }

    conn.close()
    return data_jurusan

@app.route('/api/jumlah_siswa', methods=['GET'])
def jumlah_siswa():
    data_jurusan = get_jumlah_siswa()
    return ujson.dumps(data_jurusan)

if __name__ == '__main__':
    app.run(debug=True)