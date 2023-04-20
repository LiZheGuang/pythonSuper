# 此项目执行的是注入SQL语句的操作 创建数据


from pymysql import Connection

from findImage import findDatas
# sql参数
conn = Connection(
    host="localhost",
    port=3306,
    user="root",
    password="a7161089",
    autocommit=True
)

def dbsAppendDats():
    dbsdes = findDatas()
    return dbsdes
# 链接并查看版本
# print(conn.get_server_info())

# 获取SQL查询实例
cursor = conn.cursor()

# 选择操作的数据库
conn.select_db('photo')

DATABASE  = dbsAppendDats()

for item in DATABASE:
    item_name = item['name']
    item_path = item['path']
    item_type = item['type']
    sql_str = f"INSERT INTO orders(photo_name, photo_type, photo_path) VALUES ('{item_name}','{item_path}','{item_type}');"
    # 执行SQL语句
    cursor.execute(sql_str)
    # print(sql_str)


# 使用游标对象-实例来执行SQL语句
# cursor.execute('SELECT  * FROM  student  order by id ASC ;')

# 获取查询对象
# respose = cursor.fetchall()



# 打印转换后的数组JSON格式
# print(respose)
# for item in respose:
#     print(item)

# 数据处理函数



# 关闭
conn.close()


