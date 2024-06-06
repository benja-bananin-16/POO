def generar_tabla_multiplicar():
    numero = int(input("Ingresa la tabla que deseas ver "))

    if numero < 1 or numero > 12:
        print("Por favor, ingresa un número entre 1 y 12.")
        return

    for i in range(1, 13):
        print(f"{numero} x {i} = {numero * i}")

generar_tabla_multiplicar()
