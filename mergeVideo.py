# merge video
import cv2
import os
import re

def get_num(filename):
    return int(re.findall('\d+', filename)[0])

def main():
    path = '/Users/mac/Downloads/hebing' # 图片所在目录

    img_list = os.listdir(path) # 获取目录下所有图片的文件名列表

    # img_list = sorted(img_list, key=get_num)
    img_list = sorted(img_list) # 排序，将文件名按数字顺序排序
    filter_img_list = []
    for itemName in img_list:
        if itemName[-3:] == 'png':
            filter_img_list.append(itemName)

    img = cv2.imread(os.path.join(path, filter_img_list[2])) # 读取第一张图片，获取图像大小

    height, width, _ = img.shape # 获取图像高度、宽度和通道数（RGB图像通道数为3）

    fourcc = cv2.VideoWriter_fourcc(*'mp4v') # 定义编解码格式
    video = cv2.VideoWriter('output.mp4', fourcc, 30.0, (width,height)) # 创建视频写入器，10.0是帧率，(width, height)是视频分辨率

    for img_name in filter_img_list:
        img_path = os.path.join(path, img_name) # 获取图像文件路径
        img = cv2.imread(img_path) # 读取图像
        video.write(img) # 将图像写入视频文件

    video.release() # 释放视频写入器资源

if __name__ == '__main__':
    main()