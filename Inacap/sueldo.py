def calcular_sueldo():
    nombre = input("Ingrese el nombre completo del empleado: ")
    valor_hora = float(input("Ingrese el valor por hora: "))
    horas_trabajadas = float(input("Ingrese la cantidad de horas trabajadas en el mes: "))

    horas_extras = max(0, min(horas_trabajadas - 160, 40))
    sueldo_base = min(horas_trabajadas, 160) * valor_hora
    sueldo_horas_extras = horas_extras * valor_hora * 2
    sueldo_total = sueldo_base + sueldo_horas_extras

    print(f"\nNombre del empleado: {nombre}")
    print(f"Sueldo base: {sueldo_base:}")
    print(f"Sueldo por horas extras: {sueldo_horas_extras:}")
    print(f"Sueldo total a pagar: {sueldo_total:}")

calcular_sueldo()
