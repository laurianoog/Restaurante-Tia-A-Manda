function openWhatsApp() {
    const phoneNumber = "5511951228221"; // Substitua com o número do restaurante
    const message = "Olá, gostaria de encomendar um produto";
    open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}