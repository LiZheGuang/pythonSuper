import re

def read_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
        content = content.split('\n')
    return content

def findDatas():
    file_path = 'output.txt'
    file_content = read_file(file_path)

    defasc = []

    for item in file_content:
        # 图片类型
        match = re.search(r'/([^/]+\.((jpg|jpeg|png|JPG)))$', item)
        # print(match)
        if match:
            objectDatas = {
                'name':match.group(1),
                'type':match.group(2),
                'path':item
            }
            # 获取匹配到的图片文件名和后缀
            file_name = match.group(1)
            ext = match.group(2)

            # 输出匹配到的图片文件名和后缀
            # print("图片文件名: ", file_name)
            # print("图片后缀: ", ext)
            defasc.append(objectDatas)
        else:
            # 如果未找到匹配项
            continue
            # print("未找到匹配的文件名和后缀")

    return defasc
