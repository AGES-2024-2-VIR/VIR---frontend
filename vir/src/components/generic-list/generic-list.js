import React from 'react';

const ListItem = ({ title, description, image, buttons, showDescription }) => {
    return (
      <div style={styles.container}>
        <img src={image} alt={title} style={styles.image} />
        <div style={styles.content}>
          <h3>{title}</h3>
          {showDescription && description && <p>{description}</p>}
          {buttons && buttons.length > 0 && (
            <div style={styles.buttonContainer}>
              {buttons.map((button, index) => (
                <button key={index} style={styles.button} onClick={button.onClick}>
                  {button.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const List = ({ items }) => {
    return (
      <div>
        {items.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            buttons={item.buttons}
            showDescription={item.showDescription}
          />
        ))}
      </div>
    );
  };

  const styles = {
    container: {
      border: '1px solid #ccc',
      padding: '16px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'flex-start',
    },
    image: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      marginRight: '16px',
    },
    content: {
      flex: 1,
    },
    buttonContainer: {
      marginTop: '8px',
    },
    button: {
      marginRight: '8px',
      padding: '8px 16px',
    },
  };

  export default List;