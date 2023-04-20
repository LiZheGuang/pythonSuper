from pymysql import Connection

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
cursor.execute("SELECT photo_name,photo_name FROM  orders ;")

# 获取查询对象
respose = cursor.fetchall()



# 打印转换后的数组JSON格式
print(respose)
# for item in respose:
#     print(item)

# 数据处理函数



# 关闭
conn.close()


