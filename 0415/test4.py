filedata = open("./demo.txt",'r',encoding='UTF-8')
# print(filedata.read())
print(filedata.readlines())

md_data = open('./js.md','r',encoding='UTF-8')

print(md_data.readlines())

filedata.close()
md_data.close()