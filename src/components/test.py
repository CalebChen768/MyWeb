#打开aaa文件
f = open(r'C:\Users\Jafari Chen\Documents\WebstormProject\myweb\src\components\aaa','r',encoding = 'utf8')
#读取aaa文件，读成一个list
data = f.readlines()
#关闭aaa文件
f.close()

print(data)