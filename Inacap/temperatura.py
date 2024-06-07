def registrar_temperaturas():
    temperaturas = []
    while True:
        entrada = input("Ingresa una temperatura (o 'fin' para terminar): ").lower()
        if entrada == 'fin':
            break
        try:
            temperaturas.append(float(entrada))
        except ValueError:
            print("Entrada no válida, por favor ingresa un número.")
    if temperaturas:
        print(f"Temperatura más baja: {min(temperaturas)}°")
        print(f"Temperatura más alta: {max(temperaturas)}°")
registrar_temperaturas()
