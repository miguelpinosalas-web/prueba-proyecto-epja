document.addEventListener('DOMContentLoaded', () => {
    
    const highlightBtns = document.querySelectorAll('.highlight-btn');
    highlightBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const contentId = this.getAttribute('data-target');
            const content = document.getElementById(contentId);
            if(content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    const ctx = document.getElementById('matriculaChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['2021 (Peak Pandemia)', '2024 (Actualidad)'],
                datasets: [{
                    label: 'Adultos Matriculados en Modalidad EPJA',
                    data: [119235, 101325],
                    backgroundColor: ['#1A1817', '#FF3F20'],
                    borderColor: ['#1A1817', '#FF3F20'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 80000
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: { family: "'Inter', sans-serif" }
                        }
                    }
                }
            }
        });
    }
});
