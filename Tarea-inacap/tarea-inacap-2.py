HORAS_MENSUALES = 160
HORAS_EXTRAS_TOPE = 40


nombre_completo = input("Ingrese el nombre completo del empleado: ")
valor_hora = float(input("Ingrese el valor de la hora: "))
horas_trabajadas = float(input("Ingrese la cantidad de horas trabajadas en el mes: "))


horas_extras = max(0, horas_trabajadas - HORAS_MENSUALES)
horas_extras_pagadas = min(horas_extras, HORAS_EXTRAS_TOPE)
horas_extras_no_pagadas = horas_extras - horas_extras_pagadas


sueldo_base = HORAS_MENSUALES * valor_hora
sueldo_extras = horas_extras_pagadas * valor_hora * 2
sueldo_total = sueldo_base + sueldo_extras


print(f"Empleado: {nombre_completo}")
print(f"Sueldo base: {sueldo_base:.2f}")
print(f"Sueldo extras: {sueldo_extras:.2f}")
print(f"Sueldo total: {sueldo_total:.2f}")
print(f"Horas extras pagadas: {horas_extras_pagadas:.0f}")
print(f"Horas extras no pagadas: {horas_extras_no_pagadas:.0f}")