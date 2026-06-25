+++
date = '2026-05-16T13:34:41+07:00'
draft = false
title = 'Code - Linear Regression'
categories = ['machine-learning']
tags = ['code', 'machine-learning', 'regression']
+++

This is my first Code

I started learning simple linear regression today, my first impression when studying this was "how something small can affect any response?" How much does X affect Y? The curved line formed represents the minimum difference between the model prediction and the Y value.

## Fundamental

Inti utama dari Linear Regression adalah menggambar sebuah garis lurus di antara sekumpulan titik data. Garis ini merepresentasikan prediksi model kita. 

- **Tujuannya?** Kita ingin jarak atau selisih antara titik data asli (aktual) dengan garis prediksi kita bernilai **seminimal mungkin**. Semakin kecil total selisihnya, semakin akurat model kita untuk menebak masa depan.


## Cara kerja

Model ini mempelajari hubungan antar data melalui persamaan garis lurus:

$$f(x) = wx + b$$

* **$x$ (Fitur/Input):** Variabel bebas yang kita gunakan untuk memprediksi sesuatu.
* **$w$ (Weight/Bobot):** Nilai yang menentukan kemiringan (*slope*) garis. Angka inilah yang menjawab pertanyaan kita di awal: *seberapa besar pengaruh variabel $x$ terhadap output?* Jika $w$ besar, artinya perubahan kecil pada $x$ berdampak besar pada hasil akhirnya.
* **$b$ (Bias/Intercept):** Titik potong garis pada sumbu Y ketika nilai $x$ adalah 0. Ini adalah nilai dasar/titik mulai prediksi kita.


## College Assignment

Di sini, saya ingin melihat apakah adopsi teknologi (RME) mempengaruhi akreditasi rumah sakit:

* **Input ($X$):** Jumlah rumah sakit yang sudah menerapkan RME (*Rekam Medis Elektronik*) secara penuh.
* **Output ($Y$):** Persentase akreditasi rumah sakit tersebut.

Melalui Linear Regression, model akan mencari nilai $w$ dan $b$ yang paling pas, sehingga kita bisa memprediksi: *"Jika ada $n$ rumah sakit lagi yang menerapkan RME, seberapa besar persentase akreditasi total akan naik?"*


## Code

This is my college assignment while studying simple linear regression:

- https://github.com/r6rap/linear_regression