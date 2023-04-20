<!-- sql语法 -->



```sql

-- 增加
INSERT  INTO  student(id,name,age) values(4,'lisi',16)  

-- 删除
delete FROM  student WHERE id > 2;

-- 赋值
UPDATE student SET name='nidie' ,age = 100 WHERE  id = 1;

-- 随机增加sql
INSERT INTO student(id, name, age) VALUES (0, 'lisi', 16), (1, 'lisi', 16), (2, 'lisi', 16), (3, 'lisi', 16), (4, 'lisi', 16), (5, 'lisi', 16), (6, 'lisi', 16), (7, 'lisi', 16), (8, 'lisi', 16), (9, 'lisi', 16);

-- 随机增加sql
INSERT INTO student (id, name, age)
SELECT (SELECT COUNT(*) FROM student) + ROW_NUMBER() OVER() AS id,
       CONCAT('Name', FLOOR(RAND() * 1000)) AS name, -- 生成随机的名称
       FLOOR(RAND() * 80 + 10) AS age -- 生成随机的年龄，范围为10到89
FROM information_schema.tables
LIMIT 30;

```

