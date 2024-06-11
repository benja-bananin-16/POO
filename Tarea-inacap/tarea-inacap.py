alumnos = []
aprobados = 0
reprobados = 0
promedio_curso = 0

while True:
    nombre = input("Ingrese el nombre del alumno (o 'fin' para terminar): ")
    if nombre.lower() == 'fin':
        break
    promedio = float(input("Ingrese el promedio final del alumno: "))

    if promedio >= 4:
        situacion = "APROBADO"
        aprobados += 1
    else:
        situacion = "REPROBADO"
        reprobados += 1

    print(f"Alumno: {nombre}")
    print(f"Promedio final: {promedio:.2f}")
    print(f"Situación: {situacion}")
    print()

    alumnos.append((nombre, promedio))


for _, promedio in alumnos:
    promedio_curso += promedio
promedio_curso /= len(alumnos)

print(f"Promedio del curso: {promedio_curso:.2f}")
print(f"Alumnos aprobados: {aprobados}")
print(f"Alumnos reprobados: {reprobados}")