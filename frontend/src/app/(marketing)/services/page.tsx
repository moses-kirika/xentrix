export default function Services() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1>Our Services</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {['Consulting', 'Development', 'Strategy', 'Support'].map((service) => (
                    <div key={service} style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: 'white' }}>
                        <h3 style={{ marginBottom: '1rem' }}>{service}</h3>
                        <p style={{ color: 'var(--light-text)' }}>
                            Professional {service.toLowerCase()} services tailored to your specific needs and goals.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
