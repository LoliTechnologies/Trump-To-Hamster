walk(document.body);

function walk(node) 
{
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bDonald Trump\b/g, "Orange Hamster");
	v = v.replace(/\bDonald trump\b/g, "Orange hamster");
	v = v.replace(/\bdonald Trump\b/g, "orange Hamster");
	v = v.replace(/\bdonald trump\b/g, "orange hamster");
	v = v.replace(/\bTrump\b/g, "Hamster");
	v = v.replace(/\btrump\b/g, "hamster");

	textNode.nodeValue = v;
}


