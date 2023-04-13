def demo():
    return '1',True,"jacker"

a,b,c = demo()
print(a,b,c)


def Functionargs(*args):
    print(args)


Functionargs(1,2,3,4,5,7,8,9,"123123")

def keywargs(**kwargs):
    print(kwargs)

keywargs(name="xxx",age="18")