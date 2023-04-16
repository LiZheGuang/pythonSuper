class utils:
    h5 = None
    pc = None
    server = None
    
    def say_hi(self):
        print(f"大家好，我是方法执行{self.h5}")

ut = utils()
ut.h5 = 'webview-jsbridge'
ut.say_hi()