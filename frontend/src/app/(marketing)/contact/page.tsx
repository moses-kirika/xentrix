export default function Contact() {
    return (
        <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <h1>Contact Us</h1>
            <p style={{ margin: '1rem 0' }}>Have questions? Reach out to us directly.</p>

            <div style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <strong>Email:</strong> <a href="mailto:info@company.com" style={{ color: 'var(--accent-color)' }}>info@company.com</a>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                    <strong>Phone:</strong> +1 (555) 123-4567
                </div>
                <div>
                    <strong>Address:</strong><br />
                    123 Business Avenue,<br />
                    Tech District, City 10001
                </div>
            </div>
        </div>
    );
}
