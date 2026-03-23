# 🧁 Proyecto: Gijón Sweet - Actividad 5
**Estudiante:** Ana B. Hernández  
**Localización:** Gijón, Asturias  

---

## 1. El Portal Web (Concepto)
He desarrollado **Gijón Sweet**, una plataforma digital para una pastelería artesana local. El objetivo es modernizar la toma de pedidos, permitiendo que el cliente no solo vea el producto, sino que interactúe con el obrador para obtener presupuestos inmediatos.

## 2. Diseño y Navegación
* **Estética:** He seleccionado una paleta de colores crema y marrón chocolate para evocar la repostería tradicional.
* **Layout:** El catálogo utiliza un **Bento Grid**, organizando visualmente productos como el *Cupcake de Zanahoria*, el *Pay de Limón* y la *Tarta de Chocolate*.
* **Flujo de Navegación:** He implementado un sistema de anclajes internos. Al pulsar el botón "Calcular Presupuesto", la página realiza un scroll suave directamente hacia la sección de la calculadora.

## 3. Funcionalidad de la Aplicación
La web cuenta con un motor de cálculo dinámico. He diseñado esta función para que el cliente pueda personalizar su pedido (raciones y necesidades dietéticas) y reciba el precio final al instante sin necesidad de llamadas o correos.

## 4. Datos del Sistema (Inputs y Outputs)
Para el desarrollo de la lógica, he definido los siguientes flujos de datos:
* **Datos de Entrada (Inputs):**
    1.  `Raciones`: Cantidad de comensales (Tipo: Number).
    2.  `Obrador Sin Gluten`: Selección de seguridad alimentaria (Tipo: Checkbox).
* **Datos de Salida (Output):**
    1.  `Total Estimado`: Resultado monetario calculado (Tipo: Valor dinámico en Euros).

## 5. Lógica, Pseudocódigo y Diagrama

### 🧠 Pseudocódigo de la Calculadora
```text
AL HACER CLIC EN 'CALCULAR':
   OBTENER el valor del campo 'Raciones'
   OBTENER el estado de la casilla 'Sin Gluten'
   
   SI raciones es menor a 1:
      MOSTRAR "Error: Indica al menos 1 ración"
   SINO:
      PRECIO_BASE = raciones * 3€
      SI gluten es VERDADERO:
         SUPLEMENTO = 5€
      SINO:
         SUPLEMENTO = 0€
      
      TOTAL = PRECIO_BASE + SUPLEMENTO
      MOSTRAR TOTAL en el contenedor de resultados
   FIN SI
FIN