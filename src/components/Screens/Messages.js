import React from 'react';
import Container from '@components/Container';
import ListMessages from '@components/ListMessages';

const MessagesScreen = props => {
	return (
		<Container>
			<ListMessages {...props} />
		</Container>
	);
};

export default MessagesScreen;