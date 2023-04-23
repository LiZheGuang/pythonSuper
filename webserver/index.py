from pymysql import Connection

import json
# sql参数
conn = Connection(
    host="localhost",
    port=3306,
    user="root",
    password="a7161089",
    autocommit=True
)


# 链接并查看版本
# print(conn.get_server_info())

# 获取SQL查询实例
cursor = conn.cursor()

# 选择操作的数据库
conn.select_db('photo')


# 使用游标对象-实例来执行SQL语句
cursor.execute("SELECT * FROM  orders ;")

# 获取查询对象
respose = cursor.fetchall()



# 打印转换后的数组JSON格式
# 将结果转换为 JSON
json_data = []
for item in respose:
    d = {}
    d['name'] = item[0]
    d['type'] = item[1]
    d['path'] = item[2]

    json_data.append(d)

# 数据处理函数

# 将 JSON 数据编码为字符串
json_str = json.dumps(json_data)

with open('result.json', 'w') as f: f.write(json_str)
# 关闭
conn.close()


