def demo():
    print("demo_create")

def main():
    datas = {"bolstring" :True, "name":"jacker" , "demo":demo}
    return datas


rn = main()
rn['demo']()
print(rn)