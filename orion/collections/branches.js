// Branch Collection
Branches = new orion.collection('branches', {
  singularName: 'branch',
  pluralName: 'branches',
  link: {
    title: 'Branch',
    $set: { index: 2 }
  },
  tabular: {
    columns: [
      {data: "branch", title: "Branch"},
      //orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Branches.attachSchema(new SimpleSchema({
  branch: {
    type: String,
    label: "Branch Name"
  },
  createdBy: orion.attribute('createdBy')
}));

// orion.links._collection.update({ identifier: 'collections-branches' }, { $set: { index: 2 } });
