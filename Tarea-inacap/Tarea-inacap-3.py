#Manipulacion de estructuras iterativas (repeticion)
#While -> mientras
#for -> para

i = 1
while i <= 50 :
    print(i)
    i = i + 1
print('*'*50)

x = 1
resp = 's'
while resp == 's' :
    print(x)
    x= x + 1
    resp = input('Deseas imprimir un nuevo valr de x [s/n]: ')
print('*'*50)

for i in range(10,51,3): # 10 valor inicial de i, 51 valor de tope, 3 incremento
    print(i)