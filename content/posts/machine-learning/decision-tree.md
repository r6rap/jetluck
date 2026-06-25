+++
date = '2026-06-24T09:46:41+07:00'
draft = false
title = 'Code - Decision Tree'
categories = ['machine-learning']
tags = ['code', 'machine-learning', 'regression']
+++

Today I learn Decision Tree Regression

## Fundamental

Bayangkan kita punya kumpulan data dengan berbagai fitur. Decision Tree Regression bekerja dengan cara membagi ruang fitur tersebut menjadi beberapa wilayah (*regions*).

- **Tujuannya?** Membuat variasi target di setiap wilayah menjadi sekecil mungkin, agar data yang berada di wilayah yang sama memiliki nilai target **semirip mungkin** (homogen).


## Cara kerja

Algoritma ini bergerak dari atas ke bawah, mulai dari akar paling atas (**Root Node**) hingga titik akhir (**Leaf Node**).

Untuk menentukan di mana pembagi ruang fitur terbaik harus dibuat, algoritma mencari pembagian yang menghasilkan **WMSE (Weighted Mean Squared Error)** paling kecil.

Secara matematis, untuk setiap opsi percabangan, kita menghitung total *error*-nya:

$$\text{WMSE} = \frac{N_L}{N} \text{MSE}_L + \frac{N_R}{N} \text{MSE}_R$$

* $N_L$ dan $N_R$: Jumlah sampel di cabang kiri dan kanan.
* $N$: Total sampel sebelum dipisah.
* $\text{MSE}_L$ dan $\text{MSE}_R$: Tingkat *error* (Rata-rata Kuadrat Galat) di masing-masing cabang.

Decision Tree akan memilih fitur dan titik pembagi yang menghasilkan **WMSE terendah**, itu berarti pembagian tersebut adalah yang paling akurat untuk memisahkan data


## Alur dari Root ke Leaf

1. **Root Node (Akar):** Fitur pertama yang paling efektif memotong data menjadi dua kelompok besar.
2. **Internal Node (Cabang):** Evaluasi kondisi berikutnya pada sub-kelompok data.
3. **Leaf Node (Daun):** Titik akhir di mana keputusan atau nilai prediksi akhir diberikan. Di titik ini, ruang fitur sudah tidak dibagi lagi.


## Code 

This is my college assignment while studying decision tree rergression:

- https://github.com/r6rap/machine_learning