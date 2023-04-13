text_name = "/Users/mac/Downloads/audits.html"

f = open(text_name ,'r',encoding='UTF-8')

f_read_string = f.read()

f_div_nums = f_read_string.count("div")
f_id_nums = f_read_string.count("id=")
print(f'这段html中 div出现了{f_div_nums}次')
print(f'这段html中 id出现了{f_id_nums}次')


f.close()