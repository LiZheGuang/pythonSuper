import cv2
import os

# 设置目标文件夹路径
folder_path = "/Users/mac/Desktop/frames/"

# 读取视频
cap = cv2.VideoCapture('/Users/mac/Downloads/589C747F-E2E6-49E0-9299-6AF4CAB00F49.mp4')

# 获取帧速率
fps = int(cap.get(cv2.CAP_PROP_FPS))

# 获取帧数
frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# 判断目标文件夹是否存在，不存在则创建
if not os.path.exists(folder_path):
    os.makedirs(folder_path)

# 遍历每一帧并保存图像
for i in range(frame_count):
    # 设置帧游标位置
    cap.set(cv2.CAP_PROP_POS_FRAMES, i)

    ret, frame = cap.read()
    if ret:
        file_name = "frame_" + str(i) + ".jpg"
        file_path = folder_path + file_name
        cv2.imwrite(file_path, frame)

# 释放资源
cap.release()