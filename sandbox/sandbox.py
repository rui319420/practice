import numpy as np
import matplotlib.pyplot as plt

# グラフの準備
fig = plt.figure(figsize=(10, 7))
ax = fig.add_subplot(111, projection='3d')

# 1. 格子点を作る（積み木の底面の場所）
x_range = np.linspace(0, 1, 20)  # xは0から1
y_range = np.linspace(-1, 1, 40) # yは-1から1
X, Y = np.meshgrid(x_range, y_range)

# 2. 領域Dの内側だけを取り出すフィルタ
# 条件: x >= 0 かつ x^2 + y^2 <= 1
mask = (X >= 0) & (X**2 + Y**2 <= 1)

# 条件に合う座標だけ抽出
x_vals = X[mask]
y_vals = Y[mask]
z_vals = np.zeros_like(x_vals) # 柱の底面は高さ0

# 3. 柱のサイズを決める
dx = 0.05 # 柱の太さ(x)
dy = 0.05 # 柱の太さ(y)
dz = x_vals # 柱の高さ（これが z = x になる！）

# 4. 3D棒グラフ（bar3d）で描画
# カラーマップの設定（高さに応じて色を変える）
colors = plt.cm.viridis(dz / dz.max())

ax.bar3d(x_vals, y_vals, z_vals, dx, dy, dz, color=colors, shade=True)

# グラフの装飾
ax.set_title(r'Riemann Sum of $\iint_D x \, dx \, dy$', fontsize=15)
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')

# 視点調整
ax.view_init(elev=30, azim=-60)

plt.show()