
import React from 'react';
import styles from './unScoreBucketVisualizer.module.css';

const UNScoreBucketVisualizer = ({ data }) => {
    const samplePlayer = data && data.length > 0 ? data[0] : null;

    if (!samplePlayer) return null;

    const buckets = [
        { label: "UNScore > 90", value: samplePlayer.datasetWidePprPerGameAvgFirst3SeasonsBucketOver90 ?? 0 },
        { label: "80 - 90", value: samplePlayer.datasetWidePprPerGameAvgFirst3SeasonsBucket80To90 ?? 0 },
        { label: "72 - 80", value: samplePlayer.datasetWidePprPerGameAvgFirst3SeasonsBucket72To80 ?? 0 },
        { label: "65 - 72", value: samplePlayer.datasetWidePprPerGameAvgFirst3SeasonsBucket65To72 ?? 0 },
        { label: "< 62", value: samplePlayer.datasetWidePprPerGameAvgFirst3SeasonsBucketBelow62 ?? 0 }
    ];

    const values = buckets.map(b => b.value);
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);

    const getColor = (value) => {
        if (maxVal === minVal) return 'hsl(0, 40%, 40%)';
        const normalized = (value - minVal) / (maxVal - minVal);
        const hue = Math.round(normalized * 120);
        return `hsl(${hue}, 50%, 35%)`; // Less bright: reduced saturation and lightness
    };

    const correlation = samplePlayer.datasetWideCorrelationUNScorePprPerGameFirst3Seasons ?? 0;

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.headerCell}>UNScore Bucket</th>
                        <th className={styles.headerCell}>PPR Avg (Y1-3)</th>
                    </tr>
                </thead>
                <tbody>
                    {buckets.map((bucket, index) => (
                        <tr key={index}>
                            <td className={styles.bucketLabelCell}>{bucket.label}</td>
                            <td
                                className={styles.bucketValueCell}
                                style={{ backgroundColor: getColor(bucket.value) }}
                            >
                                {bucket.value.toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--color-gray-300)', fontSize: '0.9rem' }}>
                Correlation between UNScore and PPR/Game (Years 1-3): {correlation}
            </p>
        </div>
    );
};

export default UNScoreBucketVisualizer;
