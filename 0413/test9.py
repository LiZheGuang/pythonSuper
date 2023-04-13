def main():
    print("使用魔法功能请选择以下选项！！")
    print("选择的话输入【1】")
    print("选择的话输入【2】")
    print("选择的话输入【3】")
    print("选择的话输入【4】")
    print("选择的话输入【5】")
    print("选择的话输入【6】")
    user_chec = input("请输入选项")
    return  int(user_chec)


while True :
    use_return = main()
    if use_return != 6:
        print("选项功能")
        continue
    else:
        print('退出')
        break




