money = 10000

for i in range(1,21):
    import random
    score = random.randint(1,10)

    if score < 5:
        print(f"员工{i}绩效分{score}不满足，不发工资，下一位")
        continue
    if money >= 1000:
        money-= 1000
        print(f"员工{i}绩效分{score}满足，工资1000，公司余额{money}")
    else:
        print(f"余额不足当前剩余工资{money}")
        break
