export default function formatDateToSQLDateTime(indate: string) {
    // Convert date to ISO 8601 format
    const date = new Date(indate);

    const offsetMinutes = date.getTimezoneOffset();

    // Convert date to ISO 8601 format, adjusting for timezone offset
    const isoDateTime = new Date(date.getTime() - (offsetMinutes * 60000)).toISOString();

    // Extract date and time components
    const isoDate = isoDateTime.slice(0, 10);
    const isoTime = isoDateTime.slice(11, 19);

    // Assemble SQL datetime string: 'YYYY-MM-DD HH:MM:SS'
    const sqlDateTime = `${isoDate} ${isoTime}`;

    return sqlDateTime;
}