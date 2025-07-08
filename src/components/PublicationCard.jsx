const PublicationCard = ({ title, venue, year, summary, link, thumbnail }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-start">
          {thumbnail && (
            <div className="flex-shrink-0 mr-4">
              <img
                src={thumbnail}
                alt={title}
                className="h-24 w-24 object-cover rounded"
              />
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <a
                href={link}
                className="hover:text-indigo-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {venue} • {year}
            </p>
            <p className="text-gray-600">{summary}</p>
            {link && (
              <div className="mt-4">
                <a
                  href={link}
                  className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Paper →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationCard; 